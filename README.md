## How to run on your local machine

First, make sure to [install and configure Docker](https://docs.docker.com/docker-for-mac/install/).

Then, clone this repo.

Finally, open a terminal and `cd` into the repo, then run:

```
docker-compose build
```

This may take a few minutes the run the first time you run it. But once it's complete, run:

```
docker-compose up
```

You'll see the `postgres` and `app` containers start up. At this point, the GraphQL API will be available at `http://localhost:5000/api/`.

Right now, there is only a manufacturers query available, which requires no authorization to get. You can fetch the manufacturers query with the following:

```
{
  manufacturers(first: 1, search: "c") {
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    edges {
      node {
        manufacturer
      }
    }
  }
}
```

The current manufacturers query takes advantage of the GraphQL connection type, which allows for easy(ish) pagination. By default, the connection type comes with fields like `first` (pictured above) and `after`, or `last` and `before`. We have added a `search` field here as well because it is useful and wasn't too hard to implement. The above query returns the first manufacturer that contains the letter "c".

The connection type also relays page information (`pageInfo`), such as the starting/ending cursor of our current page, as well as whether or not there is a previous or next page available to us (e.g. `hasNextPage`). Note that `hasNextPage` only works with the `first`/`after` fields, and `hasPreviousPage` only works with the `last`/`before` fields. This is annoying but it's actually by design (look up 'hasNextPage' [here](https://www.howtographql.com/react-relay/8-pagination/) for more information). This means if we want to use connection types for pagination, the state of pages is expected to be kept by the front end.

The GraphiQL interface is available for you to experiment with in your browser at `http://localhost:5000/api/`, and most objects/fields/etc. are documented.

# main
Main app

## How to run locally

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
  manufacturers {
    id
    manufacturer
  }
}
```

Also note that the GraphiQL interface is available in your browser at `http://localhost:5000/api/`, and all objects/fields/etc. are documented!

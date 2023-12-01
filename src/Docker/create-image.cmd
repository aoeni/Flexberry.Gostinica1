docker build --no-cache -f SQL\Dockerfile.PostgreSql -t gostinica1/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t gostinica1/app ../..

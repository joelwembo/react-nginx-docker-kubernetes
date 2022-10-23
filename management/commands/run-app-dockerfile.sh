docker build -f Dockerfile -t fintechweb-v2 .


docker run -it --rm -p 3000:3000 --name fintechweb-v2 fintechweb-v2

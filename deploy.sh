#!/bin/sh
aws s3 rm s3://blog.cap10-tsubasa.com/ --recursive
aws s3 cp dist s3://blog.cap10-tsubasa.com/ --recursive
aws cloudfront create-invalidation --distribution-id EUCVJQ8V2MIUC --paths "/*"
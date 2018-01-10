#!/bin/bash

cd $(dirname $0)

./vendor/apigen/apigen/bin/apigen generate -s ../server/ -d ./api/server/$1/ --exclude vendor/ --exclude testing/ --exclude bower_components/ --exclude node_modules/ --title "Nymph $1 Server API" --tree --main Nymph

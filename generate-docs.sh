#!/bin/bash

cd $(dirname $0)

cat doxygen.conf.skel | sed -e "s/--version--/$1/" > doxygen.conf
doxygen doxygen.conf
rm doxygen.conf

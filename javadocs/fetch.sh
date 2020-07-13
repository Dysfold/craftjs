cd docs
cat ../links.txt | parallel --gnu "wget {}"
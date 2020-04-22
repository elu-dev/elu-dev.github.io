git clone --depth=1 --branch=master https://github.com/elu-dev/elu-dev.github.io

echo ""
echo "-----------"
echo ""

python3 minify-src.py

echo ""
echo "-----------"
echo ""

cd elu-dev.github.io
git status

echo ""
echo "-----------"
echo ""

echo "commit msg:"
read msg

git config --local user.name x
git config --local user.email build-script

# git commit -am "$msg"

echo ""
echo "-----------"
echo ""

git push

rm -Rf elu-dev.github.io
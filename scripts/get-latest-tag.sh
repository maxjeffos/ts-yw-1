latest_tag=$(git describe --tags $(git rev-list --tags --max-count=1))
echo "${latest_tag}"


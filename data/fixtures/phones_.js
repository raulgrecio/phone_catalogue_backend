module.exports = function (collection) {
  // create an index (or do other work)
  // Be sure to return a Promise
  return collection.aggregate([
    {
      $facet: {
        totalData: [{ $match: {} }, { $skip: 2 }, { $limit: 2 }],
        totalCount: [{ $count: 'count' }]
      }
    }
  ])
}

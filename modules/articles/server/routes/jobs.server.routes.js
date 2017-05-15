/**
 * Created by Gavin on 2017-05-15.
 */
'use strict';

/**
 * Module dependencies
 */
var jobsPolicy = require('../policies/jobs.server.policy'),
  jobs = require('../controllers/jobs.server.controller');

module.exports = function (app) {
  // Articles collection routes
  app.route('/api/jobs').all(jobsPolicy.isAllowed)
    .get(jobs.list)
    .post(jobs.create);

  // Single job routes
  app.route('/api/jobs/:jobId').all(jobsPolicy.isAllowed)
    .get(jobs.read)
    .put(jobs.update)
    .delete(jobs.delete);

  // Finish by binding the job middleware
  app.param('jobId', jobs.jobByID);
};

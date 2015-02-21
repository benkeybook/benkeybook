/*
 * list     GET    /api/skills      Resource.action([parameters], [success], [error])
 * get      GET    /api/skill/:id   Resource.action([parameters], [success], [error])
 * post     POST   /api/skill       Resource.action([parameters], postData, [success], [error])
 * put      PUT    /api/skill/:id   Resource.action([parameters], postData, [success], [error])
 * delete   DELETE /api/skill/:id   Resource.action([parameters], postData, [success], [error])
 *
 */
app.factory('Skill', [
  '$resource',
  function($resource){
    return $resource('/api/:resource/:id', {}, {
      'list': {
        method:'GET',
        isArray: true,
        params: {
          resource: 'skills'
        }
      },
      'get': {
        method:'GET',
        params: {
          resource: 'skill'
        }
      },
      'post': {
        method:'POST',
        params: {
          resource: 'skill'
        }
      },
      'put': {
        method:'PUT',
        params: {
          resource: 'skill'
        }
      },
      'delete': {
        method:'DELETE',
        params: {
          resource: 'skill'
        }
      }
    });
  }
]);
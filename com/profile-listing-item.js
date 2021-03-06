/* globals app */

const yo = require('yo-yo')
const renderAvatar = require('./avatar')
const renderFollowButton = require('./follow-btn')

// exported api
// =

module.exports = function renderProfileListingItem (profile) {
  return yo`
    <div class="feed-item profile" onclick=${e => app.gotoProfile(profile, e)}>
        ${renderAvatar(profile, 'small')}

        <div class="name" onclick=${e => app.gotoProfile(profile, e)}>${profile.name || 'Anonymous'}</div>

        ${renderFollowButton(profile)}
    </div>
  `
}

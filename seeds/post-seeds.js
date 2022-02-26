const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    body: 'lorem ipsum',
    user_id: 1
  },
];
const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;

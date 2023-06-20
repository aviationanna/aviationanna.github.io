const blogPosts = [
  {
    title: 'First Post',
    date: 'June 21, 2023',
    content: 'This is the first blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    title: 'Second Post',
    date: 'June 22, 2023',
    content: 'This is the second blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    title: 'Third Post',
    date: 'June 23, 2023',
    content: 'This is the third blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
];

const blogPostsContainer = document.getElementById('blog-posts');

blogPosts.forEach(post => {
  const postElement = document.createElement('div');
  postElement.className = 'blog-post';

  const titleElement = document.createElement('h3');
  titleElement.textContent = post.title;

  const dateElement = document.createElement('p');
  dateElement.textContent = `Date: ${post.date}`;

  const contentElement = document.createElement('p');
  contentElement.textContent = post.content;

  postElement.appendChild(titleElement);
  postElement.appendChild(dateElement);
  postElement.appendChild(contentElement);

  blogPostsContainer.appendChild(postElement);
});

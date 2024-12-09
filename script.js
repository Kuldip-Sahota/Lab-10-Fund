// Task 1
document.getElementById('fetch-fetch').addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => {
        document.getElementById('data-display').innerHTML = `
          <h3>${data.title}</h3>
          <p>${data.body}</p>
        `;
      })
      .catch(error => {
        document.getElementById('data-display').innerHTML = 'Error fetching data: ' + error;
      });
});

// Task 2
document.getElementById('fetch-xhr').addEventListener('click', function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/2', true);

    xhr.onload = function() {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        document.getElementById('data-display').innerHTML = `
          <h3>${data.title}</h3>
          <p>${data.body}</p>
        `;
      } else {
        document.getElementById('data-display').innerHTML = 'Error fetching data';
      }
    };

    xhr.onerror = function() {
      document.getElementById('data-display').innerHTML = 'Network error occurred';
    };

    xhr.send();
});

// Task 3
document.getElementById('post-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent form from refreshing the page

    const title = document.getElementById('post-title').value;
    const body = document.getElementById('post-body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1
      })
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById('data-display').innerHTML = `
        <h3>Post Created:</h3>
        <h4>${data.title}</h4>
        <p>${data.body}</p>
      `;
    })
    .catch(error => {
      document.getElementById('data-display').innerHTML = 'Error creating post: ' + error;
    });
});

// Task 4
document.getElementById('put-form').addEventListener('submit', function(e) {
    e.preventDefault();  

    const postId = document.getElementById('post-id').value;
    const updatedTitle = document.getElementById('update-title').value;
    const updatedBody = document.getElementById('update-body').value;

    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;

    var xhr = new XMLHttpRequest();
    xhr.open('PUT', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function() {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        document.getElementById('data-display').innerHTML = `
          <h3>Post Updated:</h3>
          <h4>${data.title}</h4>
          <p>${data.body}</p>
        `;
      } else {
        document.getElementById('data-display').innerHTML = 'Error updating data';
      }
    };

    xhr.onerror = function() {
      document.getElementById('data-display').innerHTML = 'Network error occurred';
    };

    xhr.send(JSON.stringify({
      title: updatedTitle,
      body: updatedBody
    }));
});

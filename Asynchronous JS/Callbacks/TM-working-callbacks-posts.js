/**
 * This callback function works fine, however it waits 2 seconds until it shows the output.
 * Now, I created a callback() on the createPost(), so the getPosts() shows the output after the createPost() is finished.
 * @youtube_link https://www.youtube.com/watch?v=PoRJizFvM7s&t=555s 9:10 - 10:07 
 */
const posts = [
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post Two', body: 'This is post two'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach(post => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

// getPosts();

createPost({ title: 'Post Three', body: 'This is post three'}, getPosts);
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 216382
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 41234
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152342
    }
]

const postContainer = document.getElementById("post")

function renderPosts(){
    for(let i = 0; i < posts.length; i++){
    postContainer.innerHTML += `
    <section>
        <div class="post-header">
            <div class="user-avatar">
                <img src="${posts[i].avatar}" alt="profile picture of vincent">
            </div>
            <div class="user-dsc">
                <h1 class="user-name">${posts[i].name}</h1>
                <p class="user-address">${posts[i].location}</p>
            </div>
        </div>
        <div class="post-pic">
            <img src="${posts[i].post}" alt="vincent's post">
        </div>
        <div class="post-footer">
            <div class="post-btns">
                <img id="like-btn" src="images/icon-heart.png" alt="like button">
                <img src="images/icon-comment.png" alt="comment button">
                <img src="images/icon-dm.png" alt="message button">
            </div>
            <p class="like-counter">${numberWithCommas(posts[i].likes)} likes</p>
            <p class="post-caption"><span>${posts[i].username}</span> ${posts[i].comment}</p>
        </div>
    </section>
    <hr class="divider">
    `
}
}

renderPosts()

function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
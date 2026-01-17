document.addEventListener("DOMContentLoaded", function(){
    const sumbitBtn = document.querySelector('#sumbitComment')
    const commentInput = document.querySelector("#commentInput")
    const commentContainer = document.querySelector('#commentsContainer')


    sumbitBtn.addEventListener("click", function(){
        let commentText = commentInput.value
        addComment(commentText);
    });

    commentContainer.addEventListener("click", function(e){
        if (e.target.classList.contains('replyBtn')){
            const parentComment = e.target.parentElement
            const replyInput = parentComment.querySelector('.replyInput')
            const replyText = replyInput.value.trim();
            if (!replyText) return;

            addReply(parentComment, replyText);
            replyInput.value = "";
        }
    })


function addComment(text){
    const commentElement = document.createElement("div");

    commentElement.className = "repliesContainer";
    commentElement.innerHTML = `<p>${text}</p>
    <button class="replyBtn">Reply</button>
    <textArea class="replyInput" placeholder="Write a reply ..."></textArea>`
    commentContainer.appendChild(commentElement)
}

function addReply(parentComment, replyText){
    const replyElement = document.createElement('div')

    replyElement.className = 'reply'

    replyElement.innerHTML = `<p>${replyText}</p>`

    parentComment.appendChild(replyElement)
}

})
const links = {
    github: "LFS9902",
    codepen: ".io/LFS9902",
    facebook: ".com/luisfer9902",
    instagram: ".com/_luuis_fernando_",
    linkedin: ".com/in/luisfernando9902"
};

function changeSocialMediaLinks(){
    for(let li of socialLinks.children){
        const social = li.getAttribute('class');
        li.children[0].href = `https://www.${social}${links[social]}`; 
    }
}
changeSocialMediaLinks();

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${links.github}`;

    fetch(url).then(response => response.json()).then(data => {
        userName.textContent = data.name;
        userBio.textContent = data.bio;
        userGithub.children[1].textContent = data.login;
    });
}

getGitHubProfileInfos();
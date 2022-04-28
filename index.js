window.onload = function () {
    const renderUser = user => {
        document.getElementById('userList').innerHTML += `<li>
<div><img src="${user.portrait}" width="50" height="50"><span>${user.username} - ${user.level}</span></div>
<div><img src="${user.competitive.tank.rank_img}" width="50" height="50"><span>${user.competitive.tank.rank}</span></div>
<div><img src="${user.competitive.damage.rank_img}" width="50" height="50"><span>${user.competitive.tank.rank}</span></div>
<div><img src="${user.competitive.support.rank_img}" width="50" height="50"><span>${user.competitive.tank.rank}</span></div>
</li>`
    }
    const region = 'us'
    const nameList = ['Jay3-11894', 'sb']
    nameList.map(tag => {
        axios.get(`https://owapi.io/profile/pc/${region}/${tag}`).then(res => {
            if (res.status === 200 && res.data) {
                const user = res.data
                renderUser(user)
            }
        }).catch(err => {
            document.getElementById('userList').innerHTML += `<li style="color: red">
<div><span>${tag}</span></div>
<div><span>账号不存在</span></div>
<div><span></span></div>
<div><span></span></div>
</li>`
        })
    })
}


function renderNews(data, divName) {
    const newsBlockContent = $(`.${divName}`);
    console.log("here");
    data.forEach(user => {
        user.news.forEach(news => {
               const lines = news.item.split('\n');
               const paragraphs = lines.map(line => `<p>${line}</p>`).join('');
               newsBlockContent.append(`
                    <div class="news-post-content" id="${user.id}">
                        <div class="news-post-metaData">
                            <p>${user.firstName} ${user.lastName} ${user.middleName}</p>
                            <p>${new Date(news.time).toLocaleDateString()} ${new Date(news.time).toLocaleTimeString()}</p>
                        </div>
                        <div class="news-post">
                            <p>${paragraphs}</p>
                        </div>
                    </div>   
               `)
        });
    });
}

function renderHeader(user, divName) {
    const headerContent = $(`.${divName}`);

    headerContent.append(`
        <p>Новости пользователя</p> 
        <p>${user.firstName} ${user.lastName}</p>
    `);
}

export {renderNews, renderHeader};
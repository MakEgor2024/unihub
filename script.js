document.addEventListener('DOMContentLoaded', function() {
    const channels = [
        { name: 'Новостной канал МГУТУ', link: 'https://t.me/razumnews' },
        { name: 'Спортивный клуб «Казак»', link: 'https://t.me/familyssckazak' },
        { name: 'Студенческое научное общество МГУТУ', link: 'https://t.me/SNOMGUTM' }
    ];

    const container = document.querySelector('.telegram-channels');
    
    channels.forEach(channel => {
        const div = document.createElement('div');
        div.classList.add('channel-card');
        div.innerHTML = `
            <a href="${channel.link}" target="_blank">
                <h3>${channel.name}</h3>
            </a>
        `;
        container.appendChild(div);
    });

    // Простой поиск по названиям каналов
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        const cards = document.querySelectorAll('.channel-card');

        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            if (title.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
document.addEventListener('DOMContentLoaded', function() {
    const widgets = document.querySelectorAll('.telegram-widget');
    widgets.forEach(widget => {
        widget.insertAdjacentHTML('afterend', 
            '<p class="widget-error">Ошибка загрузки. Проверьте подключение к интернету.</p>'
        );
    });
});
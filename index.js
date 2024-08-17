const links = document.querySelectorAll('.sidebar a');

links.forEach(link => {
    link.addEventListener('click', function (event) {
        links.forEach(l => {
            l.classList.remove('active');
        });
        this.classList.add('active');
    });
});

const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const aside = document.querySelector('aside');
const themeToggler = document.querySelector('.theme-toggler');

menuBtn.addEventListener('click', () =>{
    aside.style.display = 'block';
});

closeBtn.addEventListener('click', () =>
{
    aside.style.display = 'none';
});

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');

});

// Clear the existing table body content
document.querySelector('table tbody').innerHTML = '';

// Append new rows
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `<td>${order.productName}</td>
                            <td>${order.productNumber}</td>
                            <td>${order.paymentStatus}</td>
                            <td class=${order.shipping === 'Declined' ? 'danger' 
                                : order.shipping === 'Pending' ? 'warning'
                                :  'primary' }>${order.shipping}</td>
                            <td class="primary">
                                <span class="material-symbols-sharp">
                                    chevron_right
                                </span>
                            </td>`;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});



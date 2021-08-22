document.addEventListener("DOMContentLoaded", function () {


    // const bookList = document.querySelector('#book-list');

    // console.log('the parent node is', bookList.parentNode);

    // console.log(bookList.childNodes);
    // console.log(bookList);
    // console.log(bookList.nextSibling);

    // console.log(Array.from(bookList.children));



    // const deleteBtn = document.querySelectorAll("#book-list li .delete");

    // deleteBtn.forEach((btn) => {
    //     btn.addEventListener("click", (e) => {
    //         btn.parentNode.remove();
    //     });
    // });


    //TRYING IT NOW WITH THE CONCEPT OF EVENT BUBBLING

    const list = document.querySelector("#book-list ul");

    list.addEventListener('click', (e) => {
        if (e.target.className == 'delete') {
            e.target.parentNode.remove();
        }
    });

    const myForm = document.forms['add-book'];

    const myBookList = document.querySelector("#book-list");

    myForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const value = myForm.querySelector("input[type='text'").value;

        const newli = document.createElement('li');

        newli.innerHTML = `
    <span class="name">${value}</span>
    <span class="delete">delete</span>
    `;

        list.appendChild(newli);

    });

    const hideBox = document.querySelector('#hide');

    hideBox.addEventListener('change', (e) => {
        if (hideBox.checked) {
            list.style.display = "none";

        } else {
            list.style.display = "initial";
        }
    });

    //Search event

    const search = document.forms['search-books'].querySelector('input');

    search.addEventListener('keyup', (e) => {
        const term = e.target.value.toLowerCase();
        const books = list.querySelectorAll('li');

        books.forEach((book) => {
            const title = book.firstElementChild.textContent.toLowerCase();
            if (title.indexOf(term) != -1) {
                book.style.display = "block";
            } else {
                book.style.display = "none";
            }
        });


        /* OR */

        // list.querySelectorAll('li .name').forEach((item) => {
        //     if (item.textContent.toLowerCase().indexOf(term) != -1) {
        //         item.parentElement.style.display = "block";
        //     } else {
        //         item.parentElement.style.display = "none";
        //     }
        // })
    });



    //tabbed content

    const tabs = document.querySelector('.tabs');
    const panels = document.querySelectorAll(".panel");

    tabs.addEventListener('click', (e) => {
        if (e.target.tagName == "LI") {
            const contentPanel = document.querySelector(e.target.dataset.target);

            panels.forEach((panel) => {
                if (panel == contentPanel) {
                    panel.classList.add('active');
                } else {
                    panel.classList.remove('active');
                }
            })
        }
    });

})

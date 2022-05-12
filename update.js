function updateModal(id) {
    const modalUpdateArea = document.querySelector(`.modal_banner_update_${id}`);
    const formSubmit = document.querySelector(`#form_${id}`);
    modalBlock.addEventListener("click", () => {
        modalUpdateArea.classList.remove('upwards');
        modalBlock.style.display = 'none';
    })
    if ([...modalUpdateArea.classList].includes("upward")) {
        modalUpdateArea.classList.remove('upwards');
        modalBlock.style.display = 'none';
        modalBlock.style.display = 'none';
    } else {
        modalUpdateArea.classList.add('upwards');
        modalBlock.style.display = 'block';
    };
    formSubmit.addEventListener("submit", async (e) => {
        e.preventDefault();
        alert('Updating blog...');
        const formData = new FormData(formSubmit);
        try {
            await axios
                .patch(`/blogs/${id}`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
          //  popupLoadingRemove();
            alert('Blog updated successfully');
            setTimeout(() => {
                location.reload();
            }, 3000);
        } catch (error) {
            console.log(error)
        //   popupLoadingRemove();
            if (error.response.data?.message) {
                alert(`${error.response.data.message}`);
            } else {
                alert(`${error.message}`);
            }
        }
    });
}
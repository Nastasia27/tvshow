

const input = document.querySelector('#search');



function createMovieCard(movieImg) {
    const movieCard = document.createElement('div');
    movieCard.innerHTML = `
    <div class="card shadow-sm">
    <img
      style="width: 100%; height: 250px"
      src='${movieImg}'
    />
    <div class="card-body">
      <h3>  </h3>
      <p class="card-text">
        
      </p>
      <div
        class="d-flex justify-content-between align-items-center"
      >
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-sm btn-outline-secondary"
          >
            Visit site
          </button>
        </div>
        <small>
          <span class="fa fa-star text-success"></span>
          <span class="fa fa-star text-success"></span>
          <span class="fa fa-star text-success"></span>
          <span class="fa fa-star text-success"></span>
        </small>
      </div>
    </div>
  </div>
    `;

    const contentBlock = document.querySelector('#rowContainer');
    contentBlock.appendChild(movieCard);
}



input.addEventListener('input',async function(event) {
    const request = event.target.value;


    if (request.length > 2) {
        const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${request}`);
        console.log(response);

        for (let i=0; i<10; i++) {
            console.log(i);
            const movieImg = response.data[i].show.image?.medium;

            const otherImg = 'https://img.freepik.com/free-photo/movie-background-collage_23-2149876028.jpg';


            
            createMovieCard(movieImg);
            const movieCards = document.querySelectorAll('.card-body');

            const title = movieCards[i].querySelector('h3');
            const movieName = response.data[i].show.name;
            title.textContent = movieName;

            const movieDescribe = response.data[i].show.summary;
            const describe = movieCards[i].querySelector('.card-text');
            describe.innerHTML = movieDescribe;

            const movieUrl = response.data[i].show.officialSite;
            const button = movieCards[i].querySelector('button');
            button.addEventListener('click', function(event) {
                event.preventDefault();
                window.location.href = movieUrl;
            });

            

            
       
        }

        // for (let i = 0; i < 10; i++) {
        //     console.log(i);
        //     createMovieCard();
        //     // const movieCards = document.querySelectorAll('.card-body');

        //     // const title = movieCards[i].querySelector('h3');
        //     // const movieName = response.data[i].show.name;
        //     // title.textContent = movieName;

        //     // const movieDescribe = response.data[i].show.summary;
        //     // const describe = movieCards[i].querySelector('.card-text');
        //     // describe.innerHTML = movieDescribe;

        //     // const movieUrl = response.data[i].show.officialSite;
        //     // const button = movieCards[i].querySelector('button');
        //     // button.addEventListener('click', function() {
        //     //     event.preventDefault();
        //     //     window.location.href = movieUrl;
        //     // });

        //     const movieImg = response.data[i].show.image.medium;
        //     const image = movieCards[i].querySelector('img');
        //     image.src = movieImg;



        //     // const button = document.createElement('button');
        //     // classListButton = ['btn', 'btn-sm', 'btn-outline-secondary'];
        //     // button.classList.add(...classListButton);
        //     // const buttonBlock = movieCards[i].querySelector('.btn-group');
        //     // buttonBlock.append(button);


        // //     <button type="button" class="btn btn-sm btn-outline-secondary">
        // //     Visit site
        // //   </button>
        //     // const url = movieCards[i].querySelector('.card-text');
        //     // describe.innerHTML = url;


            


        //     const movieScore = response.data[0].score;
           

        // }

        // const movieName = response.data[0].show.name;
        // const movieDescribe = response.data[0].show.summary;
        // const movieUrl = response.data[0].show.officialSite;
        // const movieImg = response.data[0].show.image.medium;
        // const movieScore = response.data[0].score;
        // console.log(movieName, movieDescribe, movieUrl);

    }
    
    
})

// input.addEventListener('keydown', function(event) {
//     //     console.log('KEYDOWN')
<script>
  import { onMount } from 'svelte';
  import faker from 'faker';
  import Header from '../components/Header.svelte';
  import Main from '../components/Main.svelte';
  import TimeLine from '../components/TimeLine.svelte';
  import Sidebar from '../components/Sidebar.svelte';

  let data = {
    user: {
      name: 'Sebastián García',
      username: 'SGarcia710',
      avatar:
        'https://github.com/SGarcia710/SGarcia710/raw/main/profile-image.png?raw=true',
    },
  };
  onMount(async () => {
    const response = await fetch(
      'https://api.thecatapi.com/v1/images/search?limit=10&page=10&order=Desc'
    );

    let responseJSON = await response.json();
    data.posts = responseJSON.map((element) => ({
      avatar: `${faker.image.people()}?random=${Math.round(
        Math.random() * 1000
      )}`,
      bookmark: faker.random.boolean(),
      comments: new Array(faker.random.number({ min: 0, max: 3 }))
        .fill(null)
        .map(() => ({
          id: faker.random.uuid(),
          text: faker.lorem.sentence(),
          username: faker.internet.userName(),
        })),
      like: faker.random.boolean(),
      location: `${faker.address.city()}, ${faker.address.country()}`,
      photo: element.url,
      postComment: faker.lorem.paragraph(),
      username: faker.internet.userName(),
    }));
    console.log(data);
  });
</script>

<Header />
<Main>
  <TimeLine posts={data.posts} />
  <Sidebar {...data.user} />
</Main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

  :global(body) {
    background-color: #fafafa;
    color: rgba(38, 38, 38, 0.7);
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
  }
  :global(h1, h2, h3) {
    margin: 0;
    padding: 0;
  }
</style>

import React from 'react';

const PhotoPost = () => {
  const [token, setToken] = React.useState('');
  const [name, setName] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [age, setAge] = React.useState('');
  const [img, setImg] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('img', img);
    formData.append('nome', name);
    formData.append('peso', weight);
    formData.append('idade', age);
    console.log(formData)

    fetch('https://dogsapi.origamid.dev/json/api/photo', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="token"
        value={token}
        onChange={({ target }) => setToken(target.value)}
      />
      <input
        type="text"
        placeholder="nome"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <input
        type="text"
        placeholder="peso"
        value={weight}
        onChange={({ target }) => setWeight(target.value)}
      />
      <input
        type="text"
        placeholder="idade"
        value={age}
        onChange={({ target }) => setAge(target.value)}
      />
      <input type="file" onChange={({ target }) => setImg(target.files[0])} />
      <button>Enviar</button>
    </form>
  );
};

export default PhotoPost;

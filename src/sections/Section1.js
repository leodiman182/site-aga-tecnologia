import React from 'react';

function Section1() {
  const images = ['https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'];

  return (
    <section className="text-center items-center my-8">
      <h3 className="text-primaryblue mb-2 font-bold text-2xl text-center">
        Nós somos a AGA Tecnologia!
      </h3>
      <div>
        <img className="border rounded-2xl w-80 mx-auto my-4" src={ images[0] } alt="AGA Tecnologia" />
        <article className="mx-auto px-12 pt-2 text-center md:px-32">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi deserunt sed sit, ex atque a perferendis delectus repudiandae corporis quis provident autem eligendi nobis, fuga expedita, fugiat facere officia! Est! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </article>
      </div>
    </section>
  )
}

export default Section1;

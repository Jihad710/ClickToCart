import React from "react";
import styled from 'styled-components'
//import { PageHero } from '../components'

export default function About() {
  return (
//     <section className="section about-section">
//       <h1 className="section-title">about us</h1>
//       <p>
//         Lorem ipsum dolor amet pok pok blue bottle fanny pack bushwick
//         mumblecore photo booth. Unicorn coloring book letterpress small batch,
//         before they sold out pour-over four loko ethical. Gentrify letterpress
//         XOXO, kale chips occupy mumblecore pickled cred sustainable. Hot chicken
//         brooklyn vape chartreuse 3 wolf moon chicharrones ugh synth craft beer
//         sustainable. Occupy sriracha keytar paleo migas, fashion axe taxidermy
//         lumbersexual pabst swag bitters drinking vinegar fingerstache put a bird
//         on it semiotics.
//       </p>
//     </section>

      <Wrapper className='page section section-center'>
        <img src="https://cdn.pixabay.com/photo/2022/10/25/13/28/hanoi-7545860_960_720.jpg" alt='nice desk' />
        <article>
          <div className='section-title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
        </article>
      </Wrapper>
   );
 }

 const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  background: var(--clr-primary-8);
  .section-title h2{
    text-align: left;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
    padding: 3rem;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
    width: 6rem;
  height: 0.25rem;
  background: #49a6e9;
  background: var(--clr-primary-5);
  margin-right: auto;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  .page {
  min-height: calc(100vh - (20vh + 10rem));
}
/* .title .underline {
  width: 6rem;
  height: 0.25rem;
  background: #49a6e9;
  background: var(--clr-primary-5);
  margin-right: auto;
} */
/* section */
.section {
  padding: 5rem 0;
}
.section-center {
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
}

@media screen and (min-width: 992px) {
  .section-center {
    width: 95vw;
  }
}
.text-center {
  text-align: center;
}
`
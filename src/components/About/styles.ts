import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .hard-skills {
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 4rem;
    }
  }

  h2 {
    display: inline-block;
    margin-bottom: 2rem;
    border-bottom: 0.2rem solid var(--blue);
  }

  #habilidades {
    margin-top: 5rem;
    color: var(--green);
    border-bottom: 0.2rem solid white;
  }

  p {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
    justify-items: center;
  }

  .about-image {
    text-align: center;
    img {
      margin-top: 2rem;
      width: 100%;
      height: 500px;
      object-fit: cover;
    }
    filter: grayscale(1);
    transition: filter 0.5s;
    &:hover {
      filter: grayscale(0);
    }
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
      object-fit: cover;
    }
  }

  @media (max-width: 960px) {
    display: block;
    text-align: center;

    .about-image {
      display: flex;
      object-fit: cover;
    }
    .hard-skills {
      justify-content: center;
    }
  }
`;

type Props = {
  title: string;
};

export function Header(props: Props) {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
}

/* return{
  <>
  <p>Hola,amigo</p>
  <input type="text" />
  <button></button>
  </>
} */

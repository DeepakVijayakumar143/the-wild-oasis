import Navigation from "./components/Navigation";

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body>
        <Navigation></Navigation>
        <main> {props.children}</main>
      </body>
    </html>
  );
}

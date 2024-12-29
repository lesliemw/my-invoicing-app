import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-6 mb-8">
      <Container className="flex justify-between items-center gap-4">
        <p className="text-sm">
          Invoicipedia &copy; {new Date().getFullYear()}
        </p>
        <p className="text-sm">
          Created by Leslie Williams-Kavanagh with Next.js, Xata, and Clerk
        </p>
      </Container>
    </footer>
  );
}

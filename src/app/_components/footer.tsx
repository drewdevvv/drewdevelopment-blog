import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-10 flex flex-col lg:flex-row items-center">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://github.com/drewdevvv"
              className="mx-3 font-bold hover:underline"
            >
              Checkout my GitHub
            </a>
            or
            <a
              href="https://linkedin.com/in/drew-ponce"
              className="mx-3 font-bold hover:underline"
            >
              my LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

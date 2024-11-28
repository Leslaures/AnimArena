import "./Help.css";
import TypewriterEffect from "typewriter-effect";

interface HelpProps {
  help: string;
}

function Help({ help }: HelpProps) {
  return (
    <div id="divHelp">
      <p id="pHelp">
        <TypewriterEffect
          key={help}
          onInit={(Typewriter) => {
            Typewriter.typeString(help).start();
          }}
          options={{
            autoStart: true,
            loop: false,
            deleteSpeed: 0,
            delay: 20,
          }}
        />
      </p>
    </div>
  );
}

export default Help;

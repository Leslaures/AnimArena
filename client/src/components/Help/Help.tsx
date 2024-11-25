import "./Help.css";

interface HelpProps {
  help: string | null;
}
function Help({ help }: HelpProps) {
  return (
    <div id="divHelp">
      <p id="pHelp">{help}</p>
    </div>
  );
}

export default Help;

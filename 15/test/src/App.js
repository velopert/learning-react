import ColorBox from "./components/ColorBox";
import SelectColors from "./components/SelectColors";
import { ColorProvider } from "./contexts/color";

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors/>
        <ColorBox/>
      </div> 
    </ColorProvider>
  );
};

export default App;
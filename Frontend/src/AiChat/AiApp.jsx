import React, { useState } from 'react';
import StickyLogo from './StickyLogo';
import SupportDialogue from './SupportDialogue';

function AiApp() {
  const [dialogueVisible, setDialogueVisible] = useState(false);

  const toggleDialogue = () => {
    setDialogueVisible(!dialogueVisible);
  };

  return (
    <div>
      <StickyLogo onClick={toggleDialogue} />
      {dialogueVisible && <SupportDialogue onClose={toggleDialogue} />}
    </div>
  );
}

export default AiApp;

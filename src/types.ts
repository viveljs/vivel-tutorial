interface DialogueProps {
  characters: string[];
  alias?: string[] | string;
  mood?: string[];
  checkpoint?: string;
  lines: string[] | string;
  background?: string;
  option?: React.ReactNode;
  response?: string;
}

interface ScriptProps {
  background: string;
  bgm: string;
  dialogues: DialogueProps[];
}

interface ButtonProps {
  text?: string;
  lines?: boolean;
  dialogue?: boolean;
  scene?: string;
}

export type { ScriptProps, ButtonProps, DialogueProps };

import TextScramble from '@skits/react-text-scramble';

interface IProps {
  text: string;
  revealDelay?: number;
  className?: string;
}

const ShuffleText = ({ text, revealDelay = 100, className }: IProps) => {
  return (
    <p className={className}>
      <TextScramble
        text={text}
        autostart
        revealDelay={revealDelay}
        wrappingElement='p'
        revealText
        revealMode='typewriter'
      />
    </p>
  );
};

export default ShuffleText;

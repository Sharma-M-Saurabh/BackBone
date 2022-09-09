import { alpha, styled } from '@mui/material/styles';
import { Button, TextareaAutosize } from '@mui/material';
export const TextArea = styled(TextareaAutosize)(
  ({ theme, fontSize = '0.7rem' }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .css-zmtbji': {
      borderRadius: 4,
      height: 30,
      position: 'relative',
      backgroundColor: theme.palette.secondary.main,
      fontSize: fontSize,
      padding: '10px 12px',
      // transition: theme.transitions.create([
      //   'border-color',
      //   'background-color',
      //   'box-shadow',
      // ]),

      // '&:focus': {
      //   boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      //   borderColor: theme.palette.primary.main,
      // },
    },
  })
);

export const BootstrapButton = styled(Button)`
  text-transform: capitalize;
`;




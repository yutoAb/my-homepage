import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Alert, Container } from '@mui/material';

export function NotFound() {
  return (
    <>
      <Container sx={{ mt: 2 }}>
        <Alert severity="warning" icon={<ErrorOutlineIcon />}>
          ページが見つかりません．
        </Alert>
      </Container>
    </>
  );
}
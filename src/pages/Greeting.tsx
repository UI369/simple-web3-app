import { Paper, Box, Text, useMantineTheme } from '@mantine/core';
import { CenterLayout } from '../layout/Layout';
import { SubTitle } from '../components/Typography';
import { useNavigate } from 'react-router-dom';
import paperClasses from '../styles/paper.module.css';

export const Ask = () => {
  const { colors } = useMantineTheme();
  const navigate = useNavigate();
  return (
    <CenterLayout>
      <Box w="100%" maw={500} mb="lg">
        <SubTitle mb="sm">Greeting</SubTitle>
        <Text c={colors.steel[2]} fz="sm" mb="xl">
          -insert greeting here
        </Text>
        <Paper
          classNames={{ root: paperClasses.clickable }}
          onClick={() => navigate('/home')}
        ></Paper>
      </Box>
    </CenterLayout>
  );
};

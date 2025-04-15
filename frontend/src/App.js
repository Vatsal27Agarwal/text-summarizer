import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Box,
  Slider,
  CircularProgress,
  Alert
} from '@mui/material';
import axios from 'axios';

function App() {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [sentences, setSentences] = useState(3);
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log('Sending request to backend...');
      const response = await axios.post('http://localhost:5001/api/summarize', {
        text,
        num_sentences: sentences
      });
      console.log('Response received:', response.data);
      setSummary(response.data.summary);
      setStats({
        originalLength: response.data.original_length,
        summaryLength: response.data.summary_length
      });
    } catch (error) {
      console.error('Error details:', error);
      setError(error.response?.data?.error || error.message || 'Error generating summary');
      setSummary('');
      setStats(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Text Summarizer
      </Typography>
      
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <TextField
          fullWidth
          multiline
          rows={6}
          variant="outlined"
          label="Enter your text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          sx={{ mb: 2 }}
        />
        
        <Box sx={{ mb: 2 }}>
          <Typography gutterBottom>Number of sentences in summary: {sentences}</Typography>
          <Slider
            value={sentences}
            onChange={(e, value) => setSentences(value)}
            min={1}
            max={10}
            marks
            valueLabelDisplay="auto"
          />
        </Box>

        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={!text || loading}
          fullWidth
        >
          {loading ? <CircularProgress size={24} /> : 'Summarize'}
        </Button>
      </Paper>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {summary && (
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Summary
          </Typography>
          <Typography paragraph>{summary}</Typography>
          
          {stats && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Original text: {stats.originalLength} words
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Summary: {stats.summaryLength} words
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Reduction: {Math.round((1 - stats.summaryLength / stats.originalLength) * 100)}%
              </Typography>
            </Box>
          )}
        </Paper>
      )}
    </Container>
  );
}

export default App;

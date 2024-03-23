import { supportedLanguages, useLanguage } from '@lha-labs/theme';
import { MenuItem, TextField } from '@mui/material';
import { useIntl } from 'react-intl';

export default function LanguageSwapper() {
  const { activeLanguage, languageDispatch } = useLanguage();
  const { formatMessage } = useIntl();
  return (
    <TextField
      size="small"
      select
      value={activeLanguage}
      onChange={() =>
        languageDispatch({
          type: activeLanguage === 'en' ? 'USE_FRENCH' : 'USE_ENGLISH',
        })
      }
      sx={{
        '&.MuiFormControl-root': {
          background: 'transparent',
        },
        '& .MuiInputBase-root': {
          background: 'transparent',
        },
        '& .MuiOutlinedInput-notchedOutline': {
          border: 'none !important',
        },
        '& .MuiSelect-select': {
          color: '#2F3A45',
          fontSize: 12,
          fontWeight: 600,
        },
      }}
    >
      {supportedLanguages.map((language, index) => (
        <MenuItem key={index} value={language}>
          {formatMessage({ id: language })}
        </MenuItem>
      ))}
    </TextField>
  );
}

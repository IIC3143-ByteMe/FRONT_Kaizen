import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Dropdown, { type Option } from '../Dropdown';
import { describe, it, expect, jest } from '@jest/globals';

describe('Dropdown component', () => {
  const options: Option[] = [
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
  ];

  it('calls onChange with selected value', async () => {
    const handleChange = jest.fn();
    const { getByRole } = render(
      <Dropdown label="Test" options={options} value="" onChange={handleChange} />
    );
    await userEvent.selectOptions(getByRole('combobox'), '1');
    expect(handleChange).toHaveBeenCalledWith('1');
  });

  it('handles multiple selection', async () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <Dropdown
        label="Multi"
        multiple
        options={options}
        value={[]}
        onChange={handleChange}
      />
    );
    await userEvent.selectOptions(getByLabelText('Multi'), ['1', '2']);
    expect(handleChange.mock.calls[0][0]).toEqual(['1']);
    expect(handleChange.mock.calls[1][0]).toEqual(['2']);
  });
});

import React, { useMemo } from "react";
import { Dayjs } from "dayjs";
import styles from "./DatePickerCalendar.module.css";
import cls from "classnames";

// our interface for a single cell
export interface ICalendarCell {
  text: string;
  value: Dayjs;
}

function getCalendarCells(date: Dayjs): ICalendarCell[] {
  const daysInMonth = date.daysInMonth();
  const calendarCells: ICalendarCell[] = [];

  const prepareCell = (date: Dayjs, dayNumber: number) => {
    return {
      text: String(dayNumber),
      value: date.clone().set("date", dayNumber),
    };
  };

  // push current month day cells
  for (let i = 0; i < daysInMonth; i++) {
    calendarCells.push(prepareCell(date, i + 1));
  }

  // how much more we need to add?
  const cellsToAdd = 35 - daysInMonth;

  // add to start from prev month
  const lastMonth = date.subtract(1, "month");
  for (let i = 0; i < Math.floor(cellsToAdd / 2); i++) {
    calendarCells.unshift(prepareCell(lastMonth, lastMonth.daysInMonth() - i));
  }

  // add to end from next month
  const nextMonth = date.add(1, "month");
  for (let i = 0; i < Math.round(cellsToAdd / 2); i++) {
    calendarCells.push(prepareCell(nextMonth, i + 1));
  }

  return calendarCells;
}

export function getCalendarRows(date: Dayjs): Array<ICalendarCell[]> {
  const cells = getCalendarCells(date);
  const rows: Array<ICalendarCell[]> = [];

  // split one array into chunks
  for (let i = 0; i < cells.length; i += 7) {
    rows.push(cells.slice(i, i + 7));
  }

  return rows;
}

export interface IDatePickerCalendarProps {
  shownDate: Dayjs;
  selectedDate: Dayjs | Dayjs[];

  onChange: (newDate: Dayjs) => void;
}

export const DatePickerCalendar: React.FC<IDatePickerCalendarProps> = ({
  shownDate,
  selectedDate,
  onChange,
}) => {
  const handleSelectDate = (value: Dayjs) => {
    return () => onChange(value);
  };

  const rows = useMemo(() => getCalendarRows(shownDate), [shownDate]);

  return (
    <>
      <div className={styles.DatePickerCalendar__header}>
        {rows[0].map(({ value }, i) => (
          <div key={i} className={styles.DatePickerCalendar__cell}>
            {value.format("dd")}
          </div>
        ))}
      </div>

      {rows.map((cells, rowIndex) => (
        <div key={rowIndex} className={styles.DatePickerCalendar__row}>
          {cells.map(({ text, value }, i) => {
            let isSelected = false;
            if (Array.isArray(selectedDate)) {
              selectedDate.forEach((elem) => {
                console.log(value.toString() === elem.toString());
                if (value.toString() === elem.toString()) isSelected = true;
              });
            } else {
              if (value.toString() === selectedDate.toString())
                isSelected = true;
            }
            return (
              <div
                key={`${text} - ${i}`}
                className={cls(
                  styles.DatePickerCalendar__cell,
                  styles.DatePickerCalendar__dayCell,
                  isSelected
                    ? styles.DatePickerCalendar__dayCell_selected
                    : null
                )}
                onClick={handleSelectDate(value)}
              >
                {text}
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
};

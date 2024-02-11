import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import WorkHistoryRoundedIcon from '@mui/icons-material/WorkHistoryRounded';
import { Typography } from '@mui/material';

function TimeLine() {

    return (
        <>
            <Timeline position='right' sx={{
                minWidth: '70%',
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                },
            }}>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color='success'>
                            <WorkHistoryRoundedIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="subtitle1" sx={{ fontFamily: 'Monospace', fontWeight: 800 }}>QUALITY ASSURANCE ANALYST</Typography>
                        <Typography variant="subtitle2" sx={{ fontFamily: 'Monospace' }}>PedidosYa (05/2023 - Current)</Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'Monospace', fontWeight: 200 }}>
                            - Analysis and monitoring of quality indicators in various BPOs to ensure consistent achievement of objectives.<br />
                            - Implementation of reports and dashboards with various KPIs.<br />
                            - Participation in dynamics with different specialized teams to ensure the proper execution of processes by the operation.<br />
                            - Proficient in Excel, Sheets, Looker, Data Studio, BigQuery, among others.<br />
                            <br />
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </>
    );
}

export default TimeLine;
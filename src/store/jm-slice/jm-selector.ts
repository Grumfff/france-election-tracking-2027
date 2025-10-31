import { createSelector } from '@reduxjs/toolkit';
import type { CandidateRankings, EChartsSeriesData } from '../../types/survey.types';
import type { RootState } from '../store';

const selectJmData = (state: RootState) => state.majorityJudgment.jmData;

export const selectCandidateRankings = createSelector(
    [selectJmData],
    (jmData): CandidateRankings | null => {
        if (!jmData) {
            return null;
        }

        const rankings = jmData.polls.reduce<CandidateRankings>((acc, poll) => {
            const date = poll.field_dates[0];
            if (!date) return acc;

            return Object.entries(poll.results).reduce((innerAcc, [candidateId, result]) => {
                const updatedRanks = [
                    ...(innerAcc[candidateId] || []),
                    { date, rank: result.rank }
                ].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

                return {
                    ...innerAcc,
                    [candidateId]: updatedRanks
                };
            }, acc);
        }, {});

        return rankings;
    }
);

export const selectCandidateRankingsForECharts = createSelector(
    [selectJmData, selectCandidateRankings],
    (jmData, rankings): EChartsSeriesData[] | null => {
        if (!jmData || !rankings) {
            return null;
        }

        return Object.entries(rankings)
            .map(([candidateId, dateRanks]) => {
                const candidate = jmData.candidates[candidateId];
                if (!candidate) return null;
                const data: [string, number][] = dateRanks.map(dr => [dr.date, dr.rank]);
                return {
                    name: candidate.name,
                    data
                };
            })
            .filter((item): item is EChartsSeriesData => item !== null);
    }
);

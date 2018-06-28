import mongoose from 'mongoose';

/**
 * Forecast Schema
 */
const ForecastSchema = new mongoose.Schema({
  spotId:                   { type: String, required: true },
  timestamp:                { type: Date, required: true },
  updated:                  { type: Date, default: Date.now },
  spotName:                 { type: String, required: true },
  swellUnits:               { type: String, required: true },
  minSwellHeight:           { type: Number, required: true },
  maxSwellHeight:           { type: Number, required: true },
  primarySwellHeight:       { type: Number, required: true },
  primarySwellPeriod:       { type: Number, required: true },
  primarySwellDirection:    { type: Number, required: true },
  secondarySwellHeight:     { type: Number, required: true },
  secondarySwellPeriod:     { type: Number, required: true },
  secondarySwellDirection:  { type: Number, required: true },
  windUnits:                { type: String, required: true },
  windDirection:            { type: Number, required: true },
  windSpeed:                { type: Number, required: true }
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
PostSchema.method({
});

/**
 * Statics
 */
PostSchema.statics = {};

/**
 * @typedef Forecast
 */
export default mongoose.model('Forecast', ForecastSchema);
